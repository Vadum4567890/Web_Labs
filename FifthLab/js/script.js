document.addEventListener('DOMContentLoaded', () => {
    const cameraList = document.getElementById('camera-list');
    const cameraModal = document.getElementById('camera-modal');
    const saveCameraBtn = document.getElementById('save-camera-btn');
    const switchButton = document.getElementById('toggle-switch');
    const apiUrl = 'https://localhost:44341/api/Cameras';

    let cameras = [];
    let editedCamera = null;

    async function fetchCameras() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch camera data. Status: ${response.status}`);
            }
            cameras = await response.json();
            displayCameras();
        } catch (error) {
            console.error(error);
        }
    }

    fetchCameras();

    if (localStorage.getItem('cameras')) {
        cameras = JSON.parse(localStorage.getItem('cameras'));
        displayCameras();
    }

    document.getElementById('search-btn').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
        const filteredCameras = cameras.filter((camera) =>
            camera.manufacturer.toLowerCase().includes(searchInput)
        );
        displayCameras(filteredCameras);
    });

    document.getElementById('clear-btn').addEventListener('click', () => {
        cameras = [];
        localStorage.removeItem('cameras');
        displayCameras();
    });

    function updateCameraCount() {
        const cameraCount = cameras.length;
        document.getElementById('count').textContent = cameraCount;
    }

    async function deleteCamera(index) {
        const cameraId = cameras[index].id;

        try {
            const response = await fetch(`${apiUrl}/${cameraId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                cameras.splice(index, 1);
                displayCameras();
                fetchCameras();
            } else {
                throw new Error(`Failed to delete the camera. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function updateCamera(cameraId, manufacturer, memory, zoom) {
        if (cameraId === 0) {
            alert('Invalid camera ID. Please select a valid camera.');
            return;
        }
        console.log(cameraId);
        try {
            const response = await fetch(`${apiUrl}/${cameraId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:cameraId,
                    manufacturer: manufacturer,
                    memory: memory,
                    zoom: zoom,
                }),
            });

            if (response.ok) {
                fetchCameras();
                closeCameraModal();
            } else {
                throw new Error(`Failed to update camera data. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function displayCameras(cameraData = cameras) {
        cameraList.innerHTML = '';
        cameraData.forEach((camera, index) => {
            const cameraItem = document.createElement('div');
            cameraItem.className = 'camera-item';
            cameraItem.innerHTML = `
                <h3>${camera.manufacturer}</h3>
                <p>Memory: ${camera.memory} MB</p>
                <p>Zoom: ${camera.zoom}</p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            cameraList.appendChild(cameraItem);
        });
    }

    document.getElementById('create-btn').addEventListener('click', () => {
        editedCamera = null; // Clear the edited camera
        document.getElementById('modal-title').textContent = 'Create Camera';
        document.getElementById('create-btn').style.background = 'lightgray';
        cameraModal.style.display = 'block';
    });

    async function saveCamera(manufacturer, memory, zoom) {
        if (!manufacturer) {
            alert('Please enter the manufacturer.');
            return;
        }
        if (isNaN(memory) || memory < 1) {
            alert('Please enter a valid memory value greater than or equal to 1 MB.');
            return;
        }
        if (isNaN(zoom) || zoom < 0.1 || zoom > 10) {
            alert('Please enter a valid zoom factor between 0.1 and 10.');
            return;
        }

        const cameraData = { manufacturer, memory, zoom };

        if (!editedCamera) {
            // Create a new camera
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cameraData),
                });

                if (response.ok) {
                    fetchCameras();
                    closeCameraModal();
                } else {
                    throw new Error(`Failed to create a new camera. Status: ${response.status}`);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            // Update an existing camera
            updateCamera(editedCamera.id, manufacturer, memory, zoom);
        }
    }

    saveCameraBtn.addEventListener('click', () => {
        const manufacturer = document.getElementById('manufacturer').value;
        const memory = parseFloat(document.getElementById('memory').value);
        const zoom = parseFloat(document.getElementById('zoom').value);

        saveCamera(manufacturer, memory, zoom);
        updateCameraCount();
    });

    cameraList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            editedCamera = cameras[index];
            document.getElementById('modal-title').textContent = 'Edit Camera';
            document.getElementById('manufacturer').value = editedCamera.manufacturer;
            document.getElementById('memory').value = editedCamera.memory;
            document.getElementById('zoom').value = editedCamera.zoom;
            cameraModal.style.display = 'block';
        }
    });

    cameraList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteCamera(index);
        }
    });

    document.getElementById('close-modal').addEventListener('click', closeCameraModal);

    function closeCameraModal() {
        editedCamera = null; // Clear the edited camera
        cameraModal.style.display = 'none';
        document.getElementById('camera-form').reset();
        document.getElementById('create-btn').style.background = 'rgba(234, 232, 232)';
    }

    switchButton.addEventListener('click', () => {
        switchButton.classList.toggle('switch-on');

        if (switchButton.classList.contains('switch-on')) {
            cameras.sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
            displayCameras();
        } else {
            cameras = originalCameras.slice();
            displayCameras();
        }
    });

    updateCameraCount();
});

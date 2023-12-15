document.addEventListener('DOMContentLoaded', () => {
    const cameraList = document.getElementById('camera-list');
    const cameraModal = document.getElementById('camera-modal');
    const saveCameraBtn = document.getElementById('save-camera-btn');
    const switchButton = document.getElementById('toggle-switch');

 
    let cameras = [];
    let originalCameras = [];

    if (localStorage.getItem('cameras')) {
        cameras = JSON.parse(localStorage.getItem('cameras'));
        originalCameras = cameras.slice();
        displayCameras();
    }

    
    document.getElementById('search-btn').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
        const filteredCameras = originalCameras.filter((camera) =>
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
        document.getElementById('modal-title').textContent = 'Create Camera';
        document.getElementById('create-btn').style.background = 'lightgray';
        cameraModal.style.display = 'block';
    });


    saveCameraBtn.addEventListener('click', () => {
        const manufacturer = document.getElementById('manufacturer').value;
        const memory = parseFloat(document.getElementById('memory').value);
        const zoom = parseFloat(document.getElementById('zoom').value);
    
        if (!manufacturer) {
            alert('Please enter the manufacturer.');
        } else if (isNaN(memory) || memory < 1) {
            alert('Please enter a valid memory value greater than or equal to 1 MB.');
        } else if (isNaN(zoom) || zoom < 0.1 || zoom > 10) {
            alert('Please enter a valid zoom factor between 0.1 and 10.');
        } else {
            const cameraId = document.getElementById('camera-id').value;
            const cameraData = { manufacturer, memory, zoom };
    
            if (cameraId === '') {
                cameras.push(cameraData);
            } else {
                cameras[cameraId] = cameraData;
            }
    
            localStorage.setItem('cameras', JSON.stringify(cameras));
            displayCameras();
            closeCameraModal();
        }
        updateCameraCount();
    });
    
    cameraList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            const cameraData = cameras[index];
            document.getElementById('modal-title').textContent = 'Edit Camera';
            document.getElementById('manufacturer').value = cameraData.manufacturer;
            document.getElementById('memory').value = cameraData.memory;
            document.getElementById('zoom').value = cameraData.zoom;
            document.getElementById('camera-id').value = index;
            cameraModal.style.display = 'block';
        }
    });

    cameraList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            cameras.splice(index, 1);
            localStorage.setItem('cameras', JSON.stringify(cameras));
            displayCameras();
        }
        updateCameraCount();
    });

    document.getElementById('close-modal').addEventListener('click', closeCameraModal);

    function closeCameraModal() {
        cameraModal.style.display = 'none';
        document.getElementById('camera-form').reset();
        document.getElementById('create-btn').style.background = "rgba(234, 232, 232)";
        document.getElementById('camera-id').value = '';
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

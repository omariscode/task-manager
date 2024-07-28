document.addEventListener('DOMContentLoaded', (event) => {
    // Animation for adding a task
    const taskInput = document.querySelector('input[name="content"]');
    const addTaskButton = document.querySelector('input[type="submit"]');

    addTaskButton.addEventListener('click', (event) => {
        if (taskInput.value.trim() !== '') {
            taskInput.classList.add('animate-pulse');
        }
    });

    // Confirmation before deleting a task
    const deleteLinks = document.querySelectorAll('a[href^="/delete/"]');

    deleteLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const confirmDelete = confirm('Are you sure you want to delete this task?');
            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });

    // Progress bar for tasks
    const tasks = document.querySelectorAll('tbody tr').length;
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.height = '10px';
    progressBar.style.width = '0';
    progressBar.style.backgroundColor = '#4caf50';
    progressBar.style.marginTop = '10px';
    progressBar.style.transition = 'width 0.5s';
    document.querySelector('.container').appendChild(progressBar);

    const updateProgressBar = () => {
        const completedTasks = document.querySelectorAll('tbody tr td:nth-child(1)').length;
        const progress = (completedTasks / tasks) * 100;
        progressBar.style.width = `${progress}%`;
    };

    updateProgressBar();
});


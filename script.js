let range = document.querySelectorAll('.range input'),
    block = document.querySelector('.block'),
    nums = document.querySelectorAll('.num');

range.forEach((item, index) => {
    nums.forEach((num, idx) => {
        if (index === 0) {
            item.addEventListener('input', event => {
                block.style.borderTopLeftRadius = `${event.target.value}px`;
                if (index === idx) num.innerHTML = `${event.target.value}px`;
            });
        } else if (index === 1) {
            item.addEventListener('input', event => {
                block.style.borderTopRightRadius = `${event.target.value}px`;
                if (index === idx) num.innerHTML = `${event.target.value}px`;
            });
        } else if (index === 2) {
            item.addEventListener('input', event => {
                block.style.borderBottomLeftRadius = `${event.target.value}px`;
                if (index === idx) num.innerHTML = `${event.target.value}px`;
            });
        } else {
            item.addEventListener('input', event => {
                block.style.borderBottomRightRadius = `${event.target.value}px`;
                if (index === idx) num.innerHTML = `${event.target.value}px`;
            });
        }
    });
});
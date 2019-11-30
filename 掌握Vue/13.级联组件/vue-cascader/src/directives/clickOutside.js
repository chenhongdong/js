export default {
    clickOutside: {
        inserted(el, binding, vnode) {
            document.addEventListener('click', e => {
                if (e.target === el || el.contains(e.target)) {
                    return;
                }
                binding.value();    // close事件
            });
        },
        unbind() {}
    }
};
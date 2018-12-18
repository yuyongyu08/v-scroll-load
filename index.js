(function () {
    var vScrollLoader = {
        inserted: function (el, binding, vnode) {
            window.onscroll = () =>  {
                let isLoading = false;
                let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
                if (bottomOfWindow && isLoading == false) {
                    binding.value();
                    isLoading = false
                }
            }
        }
    };

    window.Vue && Vue.directive('scroll-load', vScrollLoader);
})();
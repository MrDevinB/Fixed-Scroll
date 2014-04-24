(function($) {
    $.fn.fixedScroll = function() {
        return this.each(function() {
            var ele = $(this),
            parent = ele.parent(),
            eO = ele.offset(),
            pO = parent.offset(),
            ele_top = eO.top - pO.top,
            fixed_top = pO.top,
            fixed_bottom = fixed_top + parent.outerHeight() - ele.outerHeight() - ele_top;

            if (parent.css('position') != 'absolute')
                parent.css('position', 'relative');

            window.onscroll = function(e) {
                var _y = window.scrollY || document.documentElement.scrollTop,
                a = _y >= fixed_top,
                b = _y >= fixed_bottom,
                top = b ? parent.outerHeight() - ele.outerHeight() : ele_top,
                pos = b ? 'absolute': 'fixed';

                a ? ele.css({
                    'position': pos,
                    'top': top
                }) : ele.removeAttr('style');
            }
        })
    }

    $(document).ready(function() {
        $('[data-fixed-scroll]').fixedScroll();
    })
})(jQuery);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.homeControl = factory());
}(this, function () { 'use strict';

    var HomeControl = /** @class */ (function () {
        function HomeControl() {
        }
        return HomeControl;
    }());
    //# sourceMappingURL=homeControl.js.map

    var index = {
        HomeControl: HomeControl
    };

    return index;

}));

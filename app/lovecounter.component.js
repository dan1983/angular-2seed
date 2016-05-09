System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoveCounterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoveCounterComponent = (function () {
                function LoveCounterComponent() {
                    this.counter = 0;
                    this.isLiked = false;
                }
                LoveCounterComponent.prototype.onClick = function () {
                    this.isLiked = !this.isLiked;
                    this.counter += this.isLiked ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoveCounterComponent.prototype, "counter", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoveCounterComponent.prototype, "isLiked", void 0);
                LoveCounterComponent = __decorate([
                    core_1.Component({
                        selector: 'lovecounter',
                        template: "<i\n  \t\tclass=\"glyphicon glyphicon-heart\"\n  \t\t[class.highlighted]=\"!isLiked\"\n  \t  (click) = \"onClick()\">\n  </i>\n  <span>{{counter}}</span>",
                        styles: ["\n      .glyphicon-heart {\n        color:#ccc;\n        cursor:pointer;\n        }\n        .highlighted {\n          color:deepink;\n        }\n      "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoveCounterComponent);
                return LoveCounterComponent;
            }());
            exports_1("LoveCounterComponent", LoveCounterComponent);
        }
    }
});
//# sourceMappingURL=lovecounter.component.js.map
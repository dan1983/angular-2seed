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
    var FavoriteComponet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponet = (function () {
                function FavoriteComponet() {
                    this.isFavorite = false;
                }
                FavoriteComponet.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                };
                FavoriteComponet = __decorate([
                    core_1.Component({
                        selector: 'start',
                        template: "\n\t<i\n\t\tclass=\"glyphicon\"\n\t\t[class.glyphicon-star-empty]=\"!isFavorite\"\n\t\t[class.glyphicon-star]=\"isFavorite\"\n\t\t(click) = \"onClick()\"\n\t>\n\t</i>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponet);
                return FavoriteComponet;
            }());
            exports_1("FavoriteComponet", FavoriteComponet);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map
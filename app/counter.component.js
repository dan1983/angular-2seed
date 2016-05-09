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
    var CounterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CounterComponent = (function () {
                function CounterComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                CounterComponent.prototype.upVote = function () {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                CounterComponent.prototype.downVote = function () {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CounterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CounterComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CounterComponent.prototype, "vote", void 0);
                CounterComponent = __decorate([
                    core_1.Component({
                        selector: 'counter',
                        template: "<div class=\"container-vote\">\n  <i class=\"glyphicon glyphicon-menu-up vote button\"\n  \t\t[class.ligt]=\"myVote == 1\"\n\n  \t\t(click) = \"upVote()\">\n  </i><br>\n  <span>{{voteCount + myVote }}</span><br>\n  <i class=\"glyphicon glyphicon-menu-down vote button\"\n  \t\t[class.dark]=\"myVote == -1\"\n\n  \t\t(click) = \"downVote()\"><br>\n  </i>\n  </div><br>\n\n  ",
                        style: [
                            ".container-vote i,.container-vote span{\n          width:20px;\n      },\n      .glyphicon-menu-down-dark, glyphicon-menu-up-dark{\n        color: grey;\n\n      },\n      .glyphicon-menu-down-light, glyphicon-menu-up-light{\n        color: yelow ;\n\n      }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CounterComponent);
                return CounterComponent;
            }());
            exports_1("CounterComponent", CounterComponent);
        }
    }
});
//# sourceMappingURL=counter.component.js.map
"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[973],{973:(b,d,l)=>{l.r(d),l.d(d,{PlayersModule:()=>B});var o=l(9116),u=l(5851),i=l(1135),x=l(7579),m=l(2722),a=l(9653);const y=t=>t.players,h=((0,a.P1)(y,t=>t.player),(0,a.P1)(y,t=>t.players));var e=l(4650),f=l(3422),g=l(6895),p=l(9602),v=l(4098),P=l(7392);function Z(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"fuse-card",15)(2,"div",16)(3,"div",17),e._uU(4),e.qZA(),e.TgZ(5,"div",18),e._uU(6),e.qZA(),e.TgZ(7,"div",19),e._uU(8),e.qZA()()(),e.BQk()),2&t){const s=r.$implicit;e.xp6(4),e.AsE("",s.name," ",s.lastname,""),e.xp6(2),e.Oqu(s.country),e.xp6(2),e.hij("Dorsal: ",s.num,"")}}function A(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"div",13),e.YNc(2,Z,9,4,"ng-container",14),e.qZA(),e.BQk()),2&t){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.filteredPlayers)("ngForTrackBy",s.trackByFn)}}function T(t,r){1&t&&(e.TgZ(0,"div",20),e._UZ(1,"mat-icon",21),e.TgZ(2,"div",22),e._uU(3,"!No se encontraron equipos! "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:document-search"))}const w=[{path:"",component:(()=>{class t{constructor(s,n,c,C,F){this._activatedRoute=s,this._changeDetectorRef=n,this._router=c,this._playersService=C,this.store=F,this.filteredPlayers=[],this.players=[],this.filters={days$:new i.X("all"),query$:new i.X(""),hideProcessed$:new i.X(!1)},this._unsubscribeAll=new x.x}ngOnInit(){this.store.select(h).pipe((0,m.R)(this._unsubscribeAll)).subscribe(s=>{this.players=this.filteredPlayers=s,console.log("Players:",this.filteredPlayers),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(s){this.filters.query$.next(s)}filterByDay(s){this.filters.days$.next(s.value)}toggleProcessed(s){this.filters.hideProcessed$.next(s.checked)}trackByFn(s,n){return n.id||s}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(o.gz),e.Y36(e.sBO),e.Y36(o.F0),e.Y36(f.h),e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ath-players"]],decls:16,vars:2,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-shamrock-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"text-xl","font-semibold"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[4,"ngIf","ngIfElse"],["noPlayers",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","max-w-80","w-full","p-6","filter-info"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight"],[1,"text-md","leading-tight","text-primary"],[1,"text-md","text-secondary","mt-2","font-semibold"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(s,n){if(1&s&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2)(3,"g",3),e._UZ(4,"circle",4)(5,"circle",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"h2",7),e._uU(8,"Listado de jugadores"),e.qZA(),e.TgZ(9,"div",8),e._uU(10," Agregue todos los equipos de cada equipo "),e.qZA()()(),e.TgZ(11,"div",9)(12,"div",10),e.YNc(13,A,3,2,"ng-container",11),e.YNc(14,T,4,1,"ng-template",null,12,e.W1O),e.qZA()()()),2&s){const c=e.MAs(15);e.xp6(13),e.Q6J("ngIf",n.filteredPlayers.length)("ngIfElse",c)}},dependencies:[g.sg,g.O5,p.y,v.PQ,P.Hw],encapsulation:2}),t})(),resolve:{players:(()=>{class t{constructor(s){this._playersService=s}resolve(s,n){return this._playersService.getPlayers()}}return t.\u0275fac=function(s){return new(s||t)(e.LFG(f.h))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let B=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Bz.forChild(w),u.m]}),t})()}}]);
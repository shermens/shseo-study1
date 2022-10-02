Vue.component('comp-child', {
    //탬플릿에서 val 사용하기
    template: '<p>{{ val }}</p>',
    //받을 속성 이름 지정하기
    props: ['val']
})

Vue.component('child-comp', {
    //탬플릿에서 val 사용하기
    template: '<p>{{ val }}</p>',
    //받을 속성 이름 지정하기
    props: ['val']
})

var app = new Vue({
    el: '#app',
    data: {
        message:'Hello Vue.js!',
        list: ['사과', '바나나', '딸기'],
        message2: '초기 메시지',
        count: 0,
        show: true,
        show2: true,
        show3: false,
        message3: 'v-pre 예제: Mustache와 디렉티브 등이 그대로 출력',
        scrollPostion: 0,
        arr: [ "it"],
        val: true,
    },
    methods:{
        handler:function(comment) {
            console.log(comment);
        },
        handleClick:function(event) {
            alert(event.target) // [object HTMLButtonElement]
        },
        handleClick2:function() {
            alert('클릭했어요!')
        },
        handleClick3:function() {
            alert('스크롤했어요!')
        },
        handleClick4:function() {
            alert('휠 움직였어요!')
        },
        handleScroll(e){
			this.scrollPostion = e.target.scrollTop;

			if(this.scrollPosition > 100){
				console.log("UP")
			} else {
				console.log("DOWN")
			}

		},
        handleDrag() {
            alert('드래그했어요!')
        },
        handleInput(event) {
            // 할당 전에 어떤 처리하기
            alert('할당전 어떤 처리 넣기')
            console.log("할당 전 처리완료")
            this.message = event.target.value
        },
        handleRight() {
            alert('우클릭!')
        },
        handlePreventRight() {
            alert('우클릭_방지!')
        },
        checkArr : function() {
            console.log(this.arr);
          }
    }
})
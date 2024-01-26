    // css에 미리 설정해둔 noneBox의 스타일을 적용함
    $('#btn').on('click', function(){
        $('nav').addClass('noneBox');
    })
    // 아이디가 클로즈인 아이를 클릭하면 noneBox를 제거
    $('#close').on('click', function(){
        $('nav').removeClass('noneBox');
    })
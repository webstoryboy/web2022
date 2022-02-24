String.prototype.toKorChars = function () {
  const cCho = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ],
    cJung = [
      'ㅏ',
      'ㅐ',
      'ㅑ',
      'ㅒ',
      'ㅓ',
      'ㅔ',
      'ㅕ',
      'ㅖ',
      'ㅗ',
      'ㅘ',
      'ㅙ',
      'ㅚ',
      'ㅛ',
      'ㅜ',
      'ㅝ',
      'ㅞ',
      'ㅟ',
      'ㅠ',
      'ㅡ',
      'ㅢ',
      'ㅣ',
    ],
    cJong = [
      '',
      'ㄱ',
      'ㄲ',
      'ㄳ',
      'ㄴ',
      'ㄵ',
      'ㄶ',
      'ㄷ',
      'ㄹ',
      'ㄺ',
      'ㄻ',
      'ㄼ',
      'ㄽ',
      'ㄾ',
      'ㄿ',
      'ㅀ',
      'ㅁ',
      'ㅂ',
      'ㅄ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ]

  const chars = []

  for (let i = 0, len = this.length; i < len; i++) {
    // 가 유니코드
    const ga = 44032
    // 글자 유니코드
    let uni = this.charCodeAt(0)

    // 글자가 한글이 아니라면 글자를 바로추가하고 다음글자 반복문으로 넘어간다
    if (uni < 0xac00 || uni > 0xd7a3) {
      chars.push(this.charAt(i))
      continue
    }

    // 현재 글자코드 - 가 유니코드
    uni = uni - ga

    let cho = parseInt(uni / 588, 10)
    let jung = parseInt((uni - cho * 588) / 28)
    let jong = parseInt(uni % 28)

    // 강아지 라는 단어를 [ㄱ, 가, 강] 배열로 반환한다
    chars.push(cCho[cho], String.fromCharCode(ga + cho * 588 + jung * 28))

    if (cJong[jong] !== '')
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong))
  }

  return chars
}

const dd = console.log

// 원이 둘레 공식 (반지름 * 2 * 파이)
const CIRCUMFERENCE = 29 * 2 * Math.PI
const typiText = [
  '프론트엔드 개발자 정범수입니다. 제 사이트에 오신걸 환영합니다.'.split(''),
  '저에 대한 소개 페이지입니다.'.split(''),
  '리액트 프로젝트 표지입니다.'.split(''),
  '제가 지금까지 리액트로 만들어온 사이트를 소개하는 페이지입니다.'.split(''),
  '퍼블리싱 반응형 및 jQuery & php 표지입니다.'.split(''),
  '퍼블리싱 반응형 과 jquery & php 로 만들어온 사이트들입니다.'.split(''),
  'contact 페이지 표지입니다.'.split(''),
  'contact 페이지입니다 포토폴리오가 마음에 드셨다면 연락바랍니다.'.split(''),
]

const typiArr = []
const audio = new Audio('./public/audio/music.mp3')

let i = 0
let j = 0
let text = ''
let timerId

const timer = {
  mainTimer: null,
  projectTimer: null,
  aboutTimer: null,
  projectCoverTimer: null,
  projectTimer: null,
  verticalProjectCoverTimer: null,
  verticalProjectTimer: null,
  contactCoverTimer: null,
  contactTimer: null,
}

typiText.forEach((el, idx) => {
  typiArr[idx] = []
  el.forEach((el2, idx2) => {
    typiArr[idx][idx2] = el2.toKorChars()
  })
})

// 스크롤 진척도 표시 함수
function indicator() {
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const percent = window.scrollY / documentHeight
  // const dashOffset = (documentHeight - window.scrollY) / documentHeight

  $('.progress__circle').css({
    strokeDasharray: CIRCUMFERENCE,
    strokeDashoffset: CIRCUMFERENCE * (1 - percent) + 'px',
  })
}

// 타이핑 애니메이션 실행 함수
function typing(name, idx) {
  if (i >= typiArr[idx].length - 1) clearInterval(timer[name])

  $('.typing').html(text + typiArr[idx][i][j])

  j++

  if (j === typiArr[idx][i].length) {
    text += typiArr[idx][i++][j - 1]

    j = 0
  }
}

// 위에 원점 기준으로 스크롤이 닿았는지 체크 함수
function checkTopScroll($element) {
  const scrollTop = $(window).scrollTop()
  const offsetTop = $element.offset().top

  return scrollTop >= offsetTop &&
    scrollTop < offsetTop + $element.innerHeight()
    ? true
    : false
}

// 원점 + 창의높이의 스크롤에 닿았는지 체크 함수
function checkBottomScroll($element) {
  const scrollTop = $(window).scrollTop()
  const windowHeight = $(window).height()
  const offsetTop = $element.offset().top
  const elementHeight = $element.height()

  return scrollTop + windowHeight >= offsetTop &&
    scrollTop + windowHeight <= offsetTop < elementHeight
    ? true
    : false
}

// 페럴렉스 스크롤 닿았을때 보여주기
function fadeAni() {
  const st = $(window).scrollTop()
  const wh = $(window).height()

  $('.fade-down').each((idx, el) => {
    const elTop = $(el).offset().top
    const elH = el.offsetHeight

    if (st + wh >= elTop + elH - 60) {
      $(el).css({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transitionDelay: $(el).data('delay'),
      })
    } else {
      $(el).css({
        opacity: 0,
        transform: 'translate3D(0, -60px, 0)',
        transitionDelay: $(el).data('delay') || 0,
        transitionDuration: $(el).data('duration') + 'ms' || 0,
      })
    }
  })

  $('.fade-up').each((idx, el) => {
    const elTop = $(el).offset().top
    const elH = el.offsetHeight

    if (st + wh >= elTop + elH - 60) {
      $(el).css({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transitionDelay: $(el).data('delay'),
      })
    } else {
      $(el).css({
        opacity: 0,
        transform: 'translate3D(0, 60px, 0)',
        transitionDelay: $(el).data('delay') || 0,
        transitionDuration: $(el).data('duration') + 'ms' || 0,
      })
    }
  })
}

function typiAni() {
  // 텍스트 애니메이샨 구햔
  $('section').each((idx, el) => {
    if (checkTopScroll($(el))) {
      if (!timer[`${el.dataset.section}Timer`]) {
        i = 0
        j = 0
        text = ''

        timer[`${el.dataset.section}Timer`] = setInterval(
          () => typing(`${el.dataset.section}Timer`, idx),
          100
        )
      }
    } else {
      clearInterval(timer[`${el.dataset.section}Timer`])
      timer[`${el.dataset.section}Timer`] = null
    }
  })
}

$(window).on('click', () => {
  $('.context-menu').css({ height: 0 })
})
$(window).on('scroll', () => {
  const wh = $(window).height()
  const st = parseInt($(window).scrollTop(), 10)

  if (st <= $('.main').height()) {
    $('.visual').width($(window).width() - st)
  } else {
    $('.visual').width(480)
  }

  typiAni()

  // 가로스크롤 구현
  if (
    st >= $('.project').offset().top &&
    window.scrollY <= $('.project').offset().top + $('.project').height() - wh
  ) {
    $('.project-list').css({
      left: -(window.scrollY - $('.project').offset().top) + 'px',
    })
  }

  $('.cover').each((idx, el) => {
    $(el).height(
      window.innerWidth +
        $(el).find('.ani-right-txt').width() +
        $(window).height()
    )
    if (checkTopScroll($(el))) {
      $(el)
        .find('.ani-right-txt')
        .css({
          left: window.innerWidth - (st - $(el).offset().top),
        })
    }
  })

  // 프로필 이미지 아래로 스크롤 따라 옮기기
  if (
    st + wh >= $('.my-profile .img-box').offset().top &&
    st <=
      $('.my-profile .img-box').offset().top +
        $('.my-profile .img-box').height()
  ) {
    $('.my-profile .img-box').css({
      transform: `translate3d(0, ${
        (st + wh - $('.my-profile').offset().top) / 4
      }px, 0)`,
    })
  }

  indicator()
  fadeAni()
  $('.scroll-top').text(st)
})

$('.menu').on('click', function (e) {
  if (!e.target.parentElement.classList.contains('context-menu')) {
    e.stopPropagation()
    $('.context-menu').css({ height: '350px' })
  }
})

$('.sound-item').on('click', (e) => {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }

  soundIcon()
})

soundIcon()

function soundIcon() {
  if (audio.paused) {
    $('.unmute').hide()
    $('.mute').show()
  } else {
    $('.unmute').show()
    $('.mute').hide()
  }
}

// 텍스트 쪼개기
$('.visual h1 > span').each((idx, el) => {
  const text =
    '<span>' + $(el).text().split('').join('</span><span>') + '</span>'

  $(el).html(text)
})

function loading() {
  const imgLoaded = imagesLoaded('body')
  const imgTotal = imgLoaded.images.length
  let imgLoadedCnt = 0

  imgLoaded.on('progress', function () {
    imgLoadedCnt += 1

    if (imgTotal / imgLoadedCnt === 1) {
      $('.wrapper').delay(1000).animate({ top: '-100%' }, 500)
      $('body').css({ overflowY: 'scroll' })
      indicator()
      fadeAni()

      const tlFirst = gsap.timeline()
      const tlSecond = gsap.timeline({ delay: 2 })

      tlFirst
        .staggerTo(
          '.introduce',
          0.8,
          { ease: Back.easeOut.config(1.7), delay: 1.5, opacity: 1, y: 0 },
          0.09
        )
        .then(() => {
          typiAni()
        })

      tlSecond
        .staggerTo(
          '.visual h1 > span:not(:nth-child(3)) > span, .icon-list, .menu',
          0.8,
          { ease: Back.easeOut.config(1.7), opacity: 1, y: 0 },
          0.09
        )
        .staggerTo(
          '.visual h1 > span:nth-child(3) > span',
          0.8,
          { ease: Back.easeOut.config(1.7), opacity: 1 },
          0.09
        )
    }
  })

  imgLoaded.on('success', function () {
    dd('success', imgLoadedCnt)
  })
}

$('body').css({ overflowY: 'hidden' })
loading()

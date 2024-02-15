const $input1 = document.querySelector('input[name="taste"]')
const $input2 = document.querySelector('input[name="amount"]')
const $input3 = document.querySelector('input[name="kind of coffee"]')
const $input4 = document.querySelector('input[name="personal preference"]')
const $input5 = document.querySelector('input[name="temperature"]')

// button 작동 후 
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = [
  {
    role: 'system',
    content: 'assistant는 커피 메뉴를 추천해주는 바리스타입니다.'
  }
];

const apiUrl = 'https://open-api.jejucodingcamp.workers.dev/';
       
$button.addEventListener('click', e => {
    e.preventDefault()
    const contents1 = $input1.value
    const contents2 = $input2.value
    const contents3 = $input3.value
    const contents4 = $input4.value
    const contents5 = $input5.value
    data.push({
        "role": "user",
        "content": `아래 조건에 따른 커피를 추천해줘.\
                    1. 선호하는 커피 맛은 ${contents1}\
                    2. 선호하는 커피의 양은 ${contents2}\
                    3. 선호하는 커피의 종류는 ${contents3}\
                    4. 선호하는 커피의 향이나 특징은 ${contents4}\
                    5. 커피의 온도는 ${contents5} `
    })

    $input1.value = ''
    $input2.value = ''
    $input3.value = ''
    $input4.value = ''
    $input5.value = ''

    chatGPTAPI()
})

function chatGPTAPI() {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      console.log(res);
      // 답변이 도착하면 assistant로 저장
      $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`;
    })
    .catch((error) => {
      console.error('Error:', error);
      // 에러 메시지를 출력하거나 사용자에게 알림을 추가할 수 있습니다.
    });
}

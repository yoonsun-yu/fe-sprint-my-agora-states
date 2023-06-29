// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
//console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // 컨텐츠 사진 
  const avatarsContent = document.createElement("img");
  avatarsContent.className = "discussion__avatar--image";
  avatarsContent.src = obj.avatarUrl;
  avatarWrapper.append(avatarsContent);

  // 컨텐츠 - 타이틀 설정
  const discussionContentH2 = document.createElement("h2");
  discussionContentH2.className = "discussion__title"

  const discussionContentH2Href = document.createElement("a");
  discussionContentH2Href.textContent = obj.title;
  discussionContentH2Href.href = obj.url;
  discussionContentH2.append(discussionContentH2Href)

  // 컨텐츠 하단 설정 
  const discussionContentDiv = document.createElement("div"); 
  discussionContentDiv.className = "discussion__information"
  discussionContentDiv.textContent = obj.author + " / " + obj.createdAt;
  discussionContent.append(discussionContentH2, discussionContentDiv)

  // 답변 여부 설정
  if(obj.answer) {
    discussionAnswered.textContent = "☑";
  } else {
    discussionAnswered.textContent = "☒";    
  }  

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

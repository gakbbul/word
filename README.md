# Word Studio

개인 단어 학습용 웹앱입니다.

## Gemini API key 보안 구조

이 프로젝트는 브라우저에 Gemini API key를 넣지 않는 구조로 사용해야 합니다.

- 브라우저는 `/api/gemini`로만 요청합니다.
- `/api/gemini.js`가 서버에서 `GEMINI_API_KEY` 환경변수를 읽습니다.
- 실제 Gemini API key는 Vercel 같은 호스팅 서비스의 환경변수에만 저장합니다.
- `index.html`이나 JavaScript 코드에 API key를 직접 적으면 안 됩니다.

## Vercel 배포 설정

1. Vercel에서 이 GitHub 저장소를 새 프로젝트로 가져옵니다.
2. 프로젝트 Settings로 들어갑니다.
3. Environment Variables 메뉴를 엽니다.
4. 이름은 `GEMINI_API_KEY`, 값은 새 Gemini API key를 넣습니다.
5. 저장한 뒤 다시 Deploy 합니다.

## 이미 노출된 API key 처리

이미 GitHub나 웹에 올라간 API key는 숨겨도 안전해지지 않습니다.
Google AI Studio 또는 Google Cloud Console에서 기존 key를 삭제하고 새 key를 만들어야 합니다.

# k8s-test-code
Google Cloud를 활용한 Docker, K8S 실습을 위한 예제 소스코드입니다. 

## 파일 설명 
1. dockerfile.txt : Docker 이미지 생성을 위한 파일로 Nodejs를 베이스 이미지로 합니다.
2. index.js : Nodejs에서 실행시킬 자바스크립트 파일입니다.
3. pokemon-svc.yaml : K8S Config (Service-LoadBalancer)
4. pokemon.yaml : K8S Config (ReplicationController & Pods)

FROM openjdk:17-jdk

# 애플리케이션 jar 파일을 Docker 이미지로 복사합니다.
COPY build/libs/*.jar /app.jar

# 포트를 노출합니다.
EXPOSE 8080

# 애플리케이션을 실행합니다.
ENTRYPOINT ["java","-jar","/app.jar"]
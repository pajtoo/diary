##
## Stage 1 - Build using Maven
##

# Use Maven with JDK 21 as the base image
FROM maven:3-eclipse-temurin-21-alpine AS backend-build

# Set the working directory
WORKDIR /app

# Copy Maven build files to the container
COPY pom.xml ./
COPY src ./src

# Download dependencies and build the application
RUN --mount=type=cache,target=/root/.m2 \
    mvn package -DskipTests


##
## Stage 2 - Create runnable image
##
# Copy the packaged application to a minimal runtime image
FROM eclipse-temurin:21-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=backend-build /app/target/*.jar diary-backend.jar

# Expose the port Spring Boot listens on (default 8080)
EXPOSE 8080

# Set the entry point for the application
ENTRYPOINT ["java", "-jar", "diary-backend.jar"]

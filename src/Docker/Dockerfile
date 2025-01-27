FROM node:10 as ember_app

COPY /src/ember-app /ember-app

WORKDIR /ember-app

RUN \
  set -x; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  ember build --environment=docker

FROM mcr.microsoft.com/dotnet/sdk:7.0 as backend

COPY /src/MyApp1 /MyApp1

WORKDIR /MyApp1

RUN \
 dotnet restore MyApp1.sln;\
 dotnet build MyApp1.sln -c Release;\
 dotnet publish ODataBackend/MyApp1.ODataBackend.csproj -c Release -o out -f net7.0

FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app

COPY --from=backend /MyApp1/out ./
COPY --from=ember_app /ember-app/dist ./wwwroot/

# Check webapi responses
HEALTHCHECK --interval=60s --timeout=15s --start-period=20s \
  CMD curl -f "http://0.0.0.0/health" || exit

ENTRYPOINT ["dotnet", "MyApp1.ODataBackend.dll"]

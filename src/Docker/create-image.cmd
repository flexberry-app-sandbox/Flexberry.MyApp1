docker build --no-cache -f SQL\Dockerfile.PostgreSql -t myapp1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t myapp1/app ../..

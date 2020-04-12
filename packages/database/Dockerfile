FROM mcr.microsoft.com/mssql/server
WORKDIR /app
COPY ./scripts/*.sql .
ENV ACCEPT_EULA Y
ARG SA_PASSWORD
EXPOSE 1433
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=10 \
    CMD /opt/mssql-tools/bin/sqlcmd -S . -U sa -P ${SA_PASSWORD} -i setup.sql || exit 1

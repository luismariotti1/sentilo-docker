FROM mongo:4.0.1
USER root

RUN apt-get clean && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    git 

# source code
RUN git clone https://github.com/sentilo/sentilo.git 

COPY create-sentilo-user.js /

COPY docker-entrypoint.sh /docker-entrypoint-initdb.d/

RUN chmod +x create-sentilo-user.js

RUN chmod +x /docker-entrypoint-initdb.d/docker-entrypoint.sh

CMD [ "mongod" ]

EXPOSE 27017
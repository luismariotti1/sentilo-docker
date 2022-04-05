FROM tomcat:9.0.58-jdk8-temurin-focal
LABEL maintainer="luismariotti1"
USER root

RUN mkdir /sentilo	
WORKDIR /sentilo

RUN apt-get clean && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    git \
    maven \
    supervisor \
    vim
 
# source code
RUN git clone https://github.com/sentilo/sentilo.git .

# change permission for execute script
RUN chmod +x -R scripts

# configure mongo for docker network
RUN sed -i "s/.*catalog.mongodb.host=.*/catalog.mongodb.host=mongo-server/" /sentilo/sentilo-agent-alert/src/main/resources/properties/catalog-config.properties
RUN sed -i "s/.*catalog.mongodb.host=.*/catalog.mongodb.host=mongo-server/" /sentilo/sentilo-catalog-web/src/main/resources/properties/catalog-config.properties

# configure redis for docker network
RUN sed -i "s/.*jedis.pool.host=.*/jedis.pool.host=redis-server/" sentilo-platform/sentilo-platform-service/src/main/resources/properties/jedis-config.properties
RUN sed -i "s/.*jedis.pool.host=.*/jedis.pool.host=redis-server/" sentilo-agent-alert/src/main/resources/properties/jedis-config.properties
RUN sed -i "s/.*jedis.pool.host=.*/jedis.pool.host=redis-server/" sentilo-agent-relational/src/main/resources/properties/jedis-config.properties
RUN sed -i "s/.*jedis.pool.host=.*/jedis.pool.host=redis-server/" sentilo-agent-location-updater/src/main/resources/properties/jedis-config.properties

# configure opentsdb for docker network
RUN sed -i "s/.*catalog.mongodb.host=.*/catalog.mongodb.host=mongo-server/" sentilo-agent-historian/src/main/resources/properties/catalog-config.properties
RUN sed -i "s/.*jedis.pool.host=.*/jedis.pool.host=redis-server/" sentilo-agent-historian/src/main/resources/properties/jedis-config.properties
RUN sed -i "s/opentsdb.url=http:\/\/127.0.0.1:4242/opentsdb.url=http:\/\/opentsdb-server:4242/g" sentilo-agent-historian/src/main/resources/properties/historian-config.properties

# prepare compile script to run non interactively
RUN sed -i "s/^read$/#read/" ./scripts/buildSentilo.sh

# compile sentilo
RUN ./scripts/buildSentilo.sh

# copiar para webapps
RUN cp sentilo-catalog-web/target/sentilo-catalog-web.war /usr/local/tomcat/webapps

# execute permission for sentilo server
RUN chmod +x sentilo-platform/sentilo-platform-server/target/appassembler/bin/sentilo-server

# supervisor conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD [ "/usr/bin/supervisord" ]

# ENTRYPOINT ["/usr/bin/supervisord"]
    
EXPOSE 8080
EXPOSE 8081

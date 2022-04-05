FROM openjdk:8-jdk 
USER root

RUN apt-get clean && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    supervisor \
    wget \
    gnuplot

ENV HBASE_VERSION 1.2.1
ENV OPENTSDB_VERSION 2.3.0

RUN wget http://archive.apache.org/dist/hbase/${HBASE_VERSION}/hbase-${HBASE_VERSION}-bin.tar.gz

RUN tar xzvf hbase-${HBASE_VERSION}-bin.tar.gz

RUN rm -r hbase-${HBASE_VERSION}-bin.tar.gz 

RUN wget https://github.com/OpenTSDB/opentsdb/releases/download/v${OPENTSDB_VERSION}/opentsdb-${OPENTSDB_VERSION}_all.deb

RUN dpkg -i opentsdb-${OPENTSDB_VERSION}_all.deb

ENV COMPRESSION=NONE 

ENV HBASE_HOME=/hbase-${HBASE_VERSION}

# configure for auto generate metrics
RUN sed -i "s/.*#tsd.core.auto_create_metrics = false.*/tsd.core.auto_create_metrics = true/" /etc/opentsdb/opentsdb.conf

# start.sh
COPY start.sh /

RUN chmod +x start.sh

# supervisor conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf


CMD [ "/usr/bin/supervisord" ]

# EXPOSE 2181
# EXPOSE 16010
EXPOSE 4242
#!/bin/sh

# save agent path in variable
agent_path=/sentilo/sentilo-agent-activity-monitor
agent_server_path=$agent_path/target/appassembler/bin

echo installing elasticsearch ...

# check if appassembler folder exists
if [ ! -d $agent_path"/target/appassembler/" ]; then
    cd $agent_path
    mvn clean install; mvn package appassembler:assemble -P dev
fi

cd $agent_server_path

# # check if the sentilo-agent-activity-monitor-server fille has +x permission
if [ ! -x sentilo-agent-activity-monitor-server ]; then
    chmod +x sentilo-agent-activity-monitor-server
fi

agent_path=/sentilo/sentilo-agent-historian
agent_server_path=$agent_path/target/appassembler/bin

echo installing opentsdb ...

# check if appassembler folder exists
if [ ! -d $agent_path"/target/appassembler/" ]; then
    cd $agent_path
    mvn clean install; mvn package appassembler:assemble -P dev
fi

cd $agent_server_path

# # check if the sentilo-agent-activity-monitor-server fille has +x permission
if [ ! -x sentilo-agent-historian ]; then
    chmod +x sentilo-agent-historian-server
fi


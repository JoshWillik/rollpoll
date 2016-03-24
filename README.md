# Rollpoll

A tool to poll websites and exit when it gets through

## Installation

```shell
npm install -g Rollpoll
```

## Usage

```shell
rollpoll http://some.site.com
```

Or combine it with other tools like the hacker you are:

```shell
# Beep when the website responds
rollpoll http://some.site.com && \
  (( speaker-test -t sine -f 1000 )& pid=$! ; sleep 0.1s ; kill -9 $pid)
```

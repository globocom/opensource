#!/bin/sh

if hash yarn 2> /dev/null; then
    yarn "$1";
else
  if [[ $1 =~ ^(access|adduser|audit|bin|bugs|c|cache|ci|cit|clean-install|clean-install-test|completion|config|create|ddp|dedupe|deprecate|dist-tag|docs|doctor|edit|explore|get|help|help-search|hook|i|init|install|install-ci-test|install-test|it|link|list|ln|login|logout|ls|org|outdated|owner|pack|ping|prefix|profile|prune|publish|rb|rebuild|repo|restart|root|run|run-script|s|se|search|set|shrinkwrap|star|stars|start|stop|t|team|test|token|tst|un|uninstall|unpublish|unstar|up|update|v|version|view|whoami)$ ]]; then
    npm $1
  else
    npm run "$1";
  fi
fi
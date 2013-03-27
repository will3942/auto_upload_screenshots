#!/bin/bash
cd ~/Desktop
sshremote="" #ssh user@host e.g will@ubuntu.local
remotepath="" #path to screenshots folder on remote server e.g /home/will/www/definedcode/screenshots
webpath="" #public URL to screenshots folder path above e.g http://definedcodehosting.com/screenshots/
while true
do
  for this in *.png
    do
      if [ "$this" != "*.png" ]
      then
        target=`echo $this | sed -e 's/ /-/g'`
        mv "$this" ~/uploaded/$target
        scp ~/uploaded/$target $sshremote:$remotepath$target
        echo "$webpath$target" | pbcopy
      fi
  done
  sleep 5
done
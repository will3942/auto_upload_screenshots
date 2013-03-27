auto_upload_screenshots
========================

Auto upload PNG files from the Desktop directory to a SSH server with SCP. Will auto upload OS X screenshots.

Requirements
--------

Remote server capable of SSH  
Web Server to serve the screenshots  

Installation
--------

1.  Clone the repo: ``` git clone https://github.com/will3942/auto_upload_screenshots.git ```
2.  Change to the script directory: ``` cd auto_upload_screenshots ```
3.  Edit the file with nano or another text editor: ``` nano auto_upload.sh ```
4.  Change the variables: ``` sshremote ``` , ``` remotepath ``` , ``` webpath ``` as detailed.
5.  Make the script executable: ``` chmod +x auto_upload.sh ```
6.  Launch the script in the background ``` bash auto_upload.sh & ```

Contact
--------

Find me @Will3942, mail@definedcode.com

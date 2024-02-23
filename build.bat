@echo off
echo Installing Python packages...
call python -m venv venv
call ./venv/Scripts/activate.bat
pip install -r ./data/requirements.txt

cls

echo Installing npm packages...
npm install

echo Installation complete.
pause
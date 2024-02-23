@echo off
echo Installing Python packages...
call ./venv/Scripts/activate.bat
pip install -r ./data/requirements.txt

echo Installing npm packages...
npm install

echo Installation complete.
pause
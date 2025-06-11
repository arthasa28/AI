@echo off
setlocal

:restart
cls

:: Tampilkan logo sederhana
echo ================================
echo      DOWNLOADER FOTO VIA LINK
echo ================================
echo.

:: Minta input URL gambar
set /p url=Masukkan link-url-foto: 

:: Minta input nama file (tanpa ekstensi)
set /p filename=Masukkan nama foto (tanpa format): 

:: Minta input format file (misal jpg/png)
set /p format=Pilih format foto (misal jpg/png): 

:: Gabungkan nama file dan format
set fullfilename=%filename%.%format%

echo.
echo Mengunduh dari: %url%
echo Menyimpan sebagai: %fullfilename%
echo.

:: Jalankan powershell untuk download file
powershell -Command "Invoke-WebRequest -Uri '%url%' -OutFile '%fullfilename%'"

echo.
echo Download selesai.
pause

goto restart

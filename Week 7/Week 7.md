# Python Module

## Apa dan kenapa Python

**Python** dibuat untuk keperluan general, tidak seperti yang dibuat untuk data analyst ataupun bahasa lain yang dikhususkan untuk keperluang masing-masing.

Python juga dipakai dalam beberapa software pemetaan yang sering kita pakai seperti **ArcGIS** ataupun **QGIS**. Pada software tersebut banyak menggunakan script **Python** untuk keperluan pengolaahan data.

## Apa itu Virtual Environtment



## Pentingnya Virtual Environtment (VENV)
+ Membedakan Library pada setiap project

Cara Pembuatan VENV pada CMD atau Powershell

> python -m venv [directory] <br>
> **python -m venv ./venv**

Untuk mengaktifkan **venv**, kita hanya perlu mengaktifkan lewat directory yang dibuat dan pada folder script dengan file activate. Namun kita tidak menjalankan dengan ***double-click file*** tersebut agak terlihat keren, tapi dengan menggunakan script:

> **\[Folder-VENV]\Scripts\Activate**

Jika **venv** sudah aktif ditandakan dengan adanya nama folder **venv** pada didepan directory terminal

![VENV sudah aktif!](/img/venv aktif.png "VENV sudah aktif")

## Basic Python

### Syntax dan run script pada terminal

> **Print("Hello World!")**

Ini merupakan syntax awal dari semua programmer. Dengan mengetik script diatas dan menyimpannya di **main.py** dan membuka terminal, lalu menjalankan :

> **python main.py**

akan mengeluarkan output sebagai berikut :

> Hello World!

### Variable dan Tipe Data

Tidak seperti JavaScript, penulisan variable pada Python tidak memerlukan Let, Const, ataupun Var.

> [NAMA] = [ISI] <br>
> **X = 2**

diatas merupakan contoh untuk mendeklarasi bahwa variable **X** adalah data interger dengan nomor **2**

Untuk **tipe data** pada Python adalah:
+ String = Huruf
+ Integer = Bilangan bulat
+ Float = Bilangan desimal
+ Dictionary

### DATA MANIPULATION

> X = 5
> Y = 7
> Z = 9.5

> print( X + Y, type(X + Y))
> print( X - Y, type(X - Y))
> print( X * Y, type(X * Y))
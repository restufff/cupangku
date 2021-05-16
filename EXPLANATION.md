## Warna

Di mulai dari color, terlebih dahulu, aku menggunakan warna khas efishery yaitu #28b796 atau hijau tosca, sebagai primary color, lalu ada #f9c80e atau kuning, sebagai secondary color, lalu sisanya ada beberapa warna yg digunakan untuk fungsi - fungsi tertentu.

![alt text](https://i.imgur.com/p9PUbml.png)

## Fonts

Fonts sendiri hanya menggunakan 2 macam fonts, yaitu Poppins di kombinasikan dengan SpaceMono. btw the license is free yah.

## Overview

![Mobile View](https://i.imgur.com/9SxaAWX.png) Mobile View
![Desktop View](https://i.imgur.com/LBO1bMd.png) Desktop View

### Title

Di Bagian title sendiri, aku menambahkan judul `Daftar Komoditas` agar user tau apa yg sedang di lihat.

### Header

![Desktop View](https://i.postimg.cc/VvJ9N8kk/image-3.png)

Di bagian header sendiri, ada beberapa fungsi, pertama untuk menfilter, kedua mengurutkan lalu ketiga di desktop ada button untuk menambahkan komoditas.

#### Filter

![](https://i.postimg.cc/sxt3kpLg/Screen-Shot-2021-01-17-at-01-03-07.png)

Aku membuat sebuah searchbox yg fungsional yah, jadi kita bisa menfilter mulai dari harga, ukuran, lokasi, komoditas, berdasarkan tipe yg kita pilih. untuk menghemat ruang di mobile ataupun desktop atau jika kedepannya mau menambahkan filter lain.

di harga & ukuran sendiri kita menggunakan range yg biasa di gunakan oleh user.

lalu ketika filter dipilih atau aktif, ada sebuah `Chips` yg menunjukan filter apa saja yg sedang aktif, lalu user pun dapat dengan mudah, menghapus atau mengembalikan data ke semula dengan menekan icon clear pada chips tsb.

#### Sorting

Untuk sorting sendiri aga berbeda antara desktop dan mobile, karena alasan kenyamanan user yah, dan alasan ruang yg terbatas juga di mobile.

![Desktop](https://i.postimg.cc/52rSZj4k/Screen-Shot-2021-01-17-at-00-59-22.png)

Di Desktop sendiri aku menggunakan dropdown atau select, yg memudahkan user desktop untuk mengaksesnya dan memilih2 sorting yg diinginkan.

![Desktop](https://i.postimg.cc/d1wkXKyx/Screen-Shot-2021-01-17-at-00-59-42.png)

Sementara di desktop sendiri menggunakan semacam modal, sehingga user juga dapat dengan mudah mensorting data yg inginkan.

### Data Container

![DESKETOP](https://i.postimg.cc/GhFpWfc0/Screen-Shot-2021-01-17-at-01-04-40.png) Desktop

Untuk di desktop aku menggunakan table yah, yg cukup informatif, karena ruang di desktop sendiri yg cukup besar, sehingga data yg di sajikan cukup lengkap.

lalu pada label `Komoditas` aku menggunakan warna primary, untuk membuat user dengan mudah, membaca atau melihat data komoditas apa yg sedang tampil.

![Mobile](https://i.postimg.cc/tCQTmbGt/Screen-Shot-2021-01-17-at-01-04-23.png)

Di mobile sendiri, karena ruang yg disediakan cukup terbatas, aku menggunakan `Card` dan mengubah struktur datanya sendiri. sehingga data yg di berikan juga informatif seperti yg ada di desktop.

lalu di sana ada tombol action `delete` yg di beri warna merah dan `edit` yg di beri warna tosca untuk memudahkan user mengubah ataupun menghapus sautu data.

#### Tambah / Ubah Data

![https://i.postimg.cc/YCFxBMvr/Screen-Shot-2021-01-17-at-01-10-52.png](https://i.postimg.cc/YCFxBMvr/Screen-Shot-2021-01-17-at-01-10-52.png)

saat menambahkan data / mengubah data aku menggunakan modal, kenapa ? karena data yg akan di tambah cenderung sedikit dan juga memudahkan user agar dapat menambah atau mengubah data dengan cepat.

![https](https://i.postimg.cc/gJxV4pbb/Screen-Shot-2021-01-17-at-01-12-58.png)

dan jika user mengklik tombol submit tanpa mengisi apapun, akan muncul semacam validasi yg menandakan user harus mengisi form2 tsb.

 $(function(){
 $('.box_skitter_large').skitter({
 animation : 'random', // Animasi berjalan secara Acak
 controls  : true, // Tombol Kontrol play pause
 controls_position : 'rightBottom', // Posisi Tombol Kontrol play pause
 numbers_align  : 'right', // Posisi nomor urut slider
 hideTools  : true, // Saat kursor meninggalkan area slider maka tombol - tombolnya akan bersembunyi
 focus   : true, // Menampilkan Tombol fokus
 progressbar  : true, // Efek animasi warna memanjang sebagai tanda waktu slider berjalan
 enable_navigation_keys: true // Slidernya juga bisa di gerakan dengan tombol arah panah komputer
});
});
# train_MERN_stack

## middlewares  
## Libraly of this Project  
### Bcrypt
สมัยก่อนนิยมการเข้ารหัสแบบ md5 หรือ sha1 ซึ่งความปลอดภัยในสมัยนี้ใช้ไม่ได้แล้ว เนื่องจากมีโปรแกรมที่สามารถถอดรหัส(Decryption) ได้นั่นเอง

ปัจจุบันมี algorithm Bcrypt  ที่ใช้เข้ารหัส (Encryption) โดย Eksblowfish Algorithm ที่เข้ารหัสแบบทางเดียว(one-way hashing algorithm.) คือไม่สามารถถอดกลับมาเป็นเหมือนเดิมได้ ถึงต่อให้ได้ ผลลัพธ์ของการเข้ารหัสก็จะไม่ได้เหมือนเดิมทุกครั้ง เพราะใน algorithm มีการใช้ round เข้ามาด้วย ซึ่งต่างจาก md5 หรือ sha1 ที่จะได้ผลลัพธ์จากการเข้ารหัสเหมือนกันทุกๆ ครั้ง

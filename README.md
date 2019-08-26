# train_MERN_stack

## middlewares & Library

### Bcrypt
สมัยก่อนนิยมการเข้ารหัสแบบ md5 หรือ sha1 ซึ่งความปลอดภัยในสมัยนี้ใช้ไม่ได้แล้ว เนื่องจากมีโปรแกรมที่สามารถถอดรหัส(Decryption) ได้นั่นเอง

ปัจจุบันมี algorithm Bcrypt  ที่ใช้เข้ารหัส (Encryption) โดย Eksblowfish Algorithm ที่เข้ารหัสแบบทางเดียว(one-way hashing algorithm.) คือไม่สามารถถอดกลับมาเป็นเหมือนเดิมได้ ถึงต่อให้ได้ ผลลัพธ์ของการเข้ารหัสก็จะไม่ได้เหมือนเดิมทุกครั้ง เพราะใน algorithm มีการใช้ round เข้ามาด้วย ซึ่งต่างจาก md5 หรือ sha1 ที่จะได้ผลลัพธ์จากการเข้ารหัสเหมือนกันทุกๆ ครั้ง  

### CORS
Cross-Origin Resource Sharing (CORS)
คือ เป็นกลไกที่ใช้ HTTP headers เพิ่มเติมเพื่อให้บราวเซอร์ได้รับสิทธิ์ในการเข้าถึงทรัพยากรที่เลือกจากเซิร์ฟเวอร์บนโดเมนอื่นมาแสดงบนหน้าเว็บบราวเซอร์ได้ อินเตอร์เน็ตเป็นการสื่อสารระหว่างคอมพิวเตอร์ ดังนั้นคอมพิวเตอร์แต่ละเครื่องต้องมี Protocol ที่เหมือนกัน ถึงจะสื่อสารกันรู้เรื่อง เว็บบราวเซอร์จะส่ง HTTP request เมื่อต้องการขอข้อมูลข้ามโดเมนหรือ port ที่ต่างกัน และต้องทำตามข้อตกลงการสื่อสาร(Protocol)
CORS จะกำหนดวิธีการที่เว็บบราวเซอร์และเซิร์ฟเวอร์สามารถโต้ตอบเพื่อกำหนดว่าจะให้อนุญาตในการขอข้อมูลข้ามโดเมนหรือไม่  

### dotenv
สำหรับเก็บ config ต่างๆของ application โดยจะอยู่ส่วนของ .gitignore

### express-rate-limit
ใช้สำหรับป้องกันโจมตีแบบ DDOS สามารถกำหนด Request ต่อวินาทีได้เพื่อป้องกันการเรียกซ้ำๆจาก IP เดิม

### express-validator 
ใช้สำหรับตรวจสอบ Input ที่รับเข้ามาว่าเป็นไปตามที่กำหนดหรือไม่ ถ้าไม่ถูกต้องให้แจ้ง Error กลับไปทาง Client

### helmet
Helmet เป็นแนวทางการปกป้อง HTTP headers ตามที่ Express ได้แนะนำไว้ข้างต้น โดยทางเอกสารของ Express กล่าวไว้ว่า Helmet สามารถครอบคลุมความปลอดภัย ได้ดังนี้
1. csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections.
2. hidePoweredBy removes the X-Powered-By header.
3. hpkp Adds Public Key Pinning headers to prevent man-in-the-middle attacks with forged certificates.
4. hsts sets Strict-Transport-Security header that enforces secure (HTTP over SSL/TLS) connections to the server.
5. ieNoOpen sets X-Download-Options for IE8+.
6. noCache sets Cache-Control and Pragma headers to disable client-side caching.
7. noSniff sets X-Content-Type-Options to prevent browsers from MIME-sniffing a response away from the declared content-type.
8. frameguard sets the X-Frame-Options header to provide clickjacking protection.
9. xssFilter sets X-XSS-Protection to enable the Cross-site scripting (XSS) filter in most recent web browsers.

### jsonwebtoken
ใช้สำหรับทำ Authentication ของระบบ โดยการเข้ารหัส token
จะมีส่วนประกอบไปด้วย  <Header>.<Payload>.<Signature>

### passportJWT
Passport.js เป็นเหมือนตัวกลางการยืนยันตัวตนที่จะประกอบด้วย Strategy หรือ กลยุทธ ที่ใช้ในการยืนยันตัวตน ซึ่งมีหลายแบบมาก ไม่ว่าจะเป็น username, password แบบปกติ facebook, google 3rd party ต่างๆ แต่ในบทความนี้เราจะเจาะจงไปที่ JWT Strategy
เพราะงั้นหลักๆการทำงานคือ เราจะสร้าง Strategy แต่ละแบบแล้วเสียบเข้าไปใน passport นั่นเอง

### mangoose
ใช้เชื่อมต่อกับ mongoDB 




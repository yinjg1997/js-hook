from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad

# 生成随机密钥和初始化向量
key = get_random_bytes(16)  # AES-128
iv = get_random_bytes(16)

# 要加密的消息
data = b"Hello, this is a secret message!"

# 加密
cipher = AES.new(key, AES.MODE_CBC, iv)
ciphertext = cipher.encrypt(pad(data, AES.block_size))

print("加密后的数据:", ciphertext)

# 解密
decipher = AES.new(key, AES.MODE_CBC, iv)
plaintext = unpad(decipher.decrypt(ciphertext), AES.block_size)

print("解密后的数据:", plaintext.decode())

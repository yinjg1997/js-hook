const { sm4 } = require("sm-crypto");

class SM4Cryptor {
  constructor({ key, mode = "cbc", iv, cipherType = "base64", padding }) {
    if (!key || key.length !== 16) {
      throw new Error("Key must be a 16-byte string");
    }
    if (!iv || iv.length !== 16) {
      throw new Error("IV must be a 16-byte string");
    }
    this.key = key;
    this.mode = mode;
    this.iv = iv;
    this.cipherType = cipherType;
    this.padding = padding;
  }

  encrypt(plainText) {
    const encryptedData = sm4.encrypt(Buffer.from(plainText), this.key, {
      mode: this.mode,
      iv: this.iv,
      // padding: this.padding,
    });

    if (this.cipherType === "base64") {
      return Buffer.from(encryptedData).toString("base64");
    } else if (this.cipherType === "hex") {
      return Buffer.from(encryptedData).toString("hex");
    } else {
      throw new Error("Unsupported cipherType");
    }
  }

  decrypt(cipherText) {
    if (this.cipherType === "base64") {
      cipherText = Buffer.from(cipherText, "base64");
    } else if (this.cipherType === "hex") {
      cipherText = Buffer.from(cipherText, "hex");
    } else {
      throw new Error("Unsupported cipherType");
    }

    const decryptedData = sm4.decrypt(cipherText, this.key, {
      mode: this.mode,
      iv: this.iv,
      // padding: this.padding,
    });

    return decryptedData;
  }
}

// 示例使用
const config = {
  key: Buffer.from("MbzgvXzBWynQrtpy", "utf8"), // 16字节
  mode: "cbc",
  iv: Buffer.from("kDrvPQfPIuArAzkF", "utf8"), // 16字节
  cipherType: "base64",
  // padding: "pkcs7", // 确保使用 PKCS7 填充
};

const cryptor = new SM4Cryptor(config);

try {
  const plainText = "Hello, SM4!";

  // 加密
  const encryptedData = cryptor.encrypt(plainText);
  console.log("Encrypted data:", encryptedData);

  // 解密
  const decryptedData = cryptor.decrypt(encryptedData);
  console.log("Decrypted data:", decryptedData.toString());
} catch (error) {
  console.error("Error:", error.message);
}

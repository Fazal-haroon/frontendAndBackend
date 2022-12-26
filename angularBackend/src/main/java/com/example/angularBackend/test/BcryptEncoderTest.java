package com.example.angularBackend.test;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encode = encoder.encode("password@!23");
        System.out.println("encode = " + encode);
        String encode2 = encoder.encode("JwtWowNicePassword");
        System.out.println("encode = " + encode2);
        for (int i=1; i<=10; i++){
            String encodedString = encoder.encode("password!$N|ce");
            System.out.println("encodedString = " + encodedString);
        }
    }
}

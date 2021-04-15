package com.project.shoppingmall.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import java.io.File;


import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class FileServiceTest {
    @Value("${custom.path.upload}")
    String filePath;

    @Test
    void 파일_상대경로_절대경로테스트() {
        File file1 = new File("file:///C:/image");
        File file2 = new File( "C:\\image");

        System.out.println(file1.getAbsolutePath());
        System.out.println(file2.getAbsolutePath());
        //file1은 classpath 상대경로를 가리킨다.
    }
}
package com.project.shoppingmall.service;

import com.project.shoppingmall.domain.File;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface FileService {

    default List<File> requestFilesToFiles(List<MultipartFile> files, String baseUrl) throws IOException {
        List<File> productImageFiles = new ArrayList<>();
        if (files.isEmpty()) {
            return productImageFiles;
        }

        String path = "images/" + new SimpleDateFormat("yyyyMMdd").format(new Date());

        java.io.File file = new java.io.File(baseUrl + path);
        // directory 해당 경로까지 디렉토리를 모두 만든다.
        if(!file.exists()) file.mkdirs();

        for (MultipartFile multipartFile : files) {
            if (!multipartFile.isEmpty()) {
                Optional<String> contentType = checkContentType(multipartFile);
                if (contentType.isEmpty()) break;

                String originalFileExtension = contentType.get();
                String newFileName = System.nanoTime() + originalFileExtension;

                File imageFile = File.builder()
                        .fileOriginalName(multipartFile.getOriginalFilename())
                        .size(multipartFile.getSize())
                        .filePath(path + "/" + newFileName)
                        .build();

                productImageFiles.add(imageFile);

                saveFile(multipartFile, path, newFileName);
            }
        }
        return productImageFiles;
    }

    private Optional<String> checkContentType(MultipartFile multipartFile) {
        String contentType = multipartFile.getContentType();
        if (ObjectUtils.isEmpty(contentType)) return Optional.empty();

        if (contentType.contains("image/jpeg")) return Optional.of(".jpg");
        else if (contentType.contains("image/png")) return Optional.of(".png");
        else if (contentType.contains("image/gif")) return Optional.of(".gif");

        return Optional.empty();
    }

    void saveFile(MultipartFile multipartFile, String relativePath, String newFileName) throws IOException;

}

package com.project.shoppingmall.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "files")
@Getter
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int size;
    private String fileOriginalName;
    private String filePath;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "item_id")
    private Product product;
}

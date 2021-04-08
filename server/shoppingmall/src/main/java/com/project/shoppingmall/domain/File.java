package com.project.shoppingmall.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "files")
@Getter @Setter
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    int size;
    String fileOriginalName;
    String filePath;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "item_id")
    Product product;
}

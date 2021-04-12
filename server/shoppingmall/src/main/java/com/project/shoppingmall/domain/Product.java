package com.project.shoppingmall.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String description;
    int price;
    int stock;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Member admin;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Category category;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    List<File> imageFiles = new ArrayList<>();


}

package com.project.shoppingmall.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    @OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
    List<Product> products = new ArrayList<>();

}

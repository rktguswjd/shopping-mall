package com.project.shoppingmall.controller.requestdto.product;

import com.project.shoppingmall.domain.Category;
import lombok.Builder;
import lombok.Data;

@Data
public class RequestProductEnrollInfo {
    String name;
    String description;
    int price;
    int stock;
    int categoryId;
}

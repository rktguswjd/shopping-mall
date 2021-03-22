package com.project.shoppingmall;

import com.project.shoppingmall.domain.Member;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class ShoppingmallApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingmallApplication.class, args);
	}
	@Bean
	public CommandLineRunner commandLineRunner() {
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				System.out.println("CommandLineRunner");
			}
		};
	}

	@Bean
	public ApplicationRunner applicationRunner() {
		return new ApplicationRunner() {
			@Override
			public void run(ApplicationArguments args) throws Exception {
				System.out.println("ApplicationRunner");
			}
		};
	}
	@EventListener(ApplicationReadyEvent.class)
	public void eventListener1() {
		System.out.println("Ready EventListener");
	}
	@EventListener(ApplicationStartedEvent.class)
	public void eventListener2() {
		System.out.println("Started EventListener");
	}


	@PostConstruct
	public void init(){
		System.out.println("PostConstruct");
	}
}


package br.com.murilo.suntech.service;

import java.util.List;

import br.com.murilo.suntech.domain.User;
import br.com.murilo.suntech.domain.UserDto;

public interface UserService {

	List<UserDto> findAll();

	UserDto saveUser(UserDto userDto);
	
}

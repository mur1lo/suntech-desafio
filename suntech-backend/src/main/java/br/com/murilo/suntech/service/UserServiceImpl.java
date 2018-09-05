package br.com.murilo.suntech.service;

import br.com.murilo.suntech.domain.User;
import br.com.murilo.suntech.repository.UserRepository;
import br.com.murilo.suntech.service.dto.UserDto;
import br.com.murilo.suntech.service.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserMapper userMapper;

    @Override
    public List<UserDto> findAll() {
        return userMapper.toDto(this.userRepository.findAll());
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        user = this.userRepository.save(user);
        userDto = userMapper.toDto(user);
        return userDto;
    }
}

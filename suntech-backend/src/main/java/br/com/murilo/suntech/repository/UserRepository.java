package br.com.murilo.suntech.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.CrudRepository;

import br.com.murilo.suntech.domain.User;

@Mapper
public interface UserRepository extends CrudRepository<User, Long>{
	List<User> findAll();
}
